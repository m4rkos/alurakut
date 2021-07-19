import { useState } from 'react';
import styled from 'styled-components'
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/MoowKutCommons'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar(propriedade) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedade.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedade.githubUser}`} target="_blank" >
          @{propriedade.githubUser}  
        </a> 
      </p>
      <hr />
      
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {

  const githubUser = 'm4rkos';  
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev',
    'felipefialho'
  ];

  const [comunidades, setComunidades] = useState([{
    id: new Date().toISOString(),
    title: 'Eu odeio segundas feiras', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG9KF0RGbxr8hSA9tKN0gHoqnfuPR6K20bIV9G6ljhhbleC3So1_8vKN7LI9dUsK_s84&usqp=CAU',
    link: 'https://monday.com/lang/pt/why-monday/'
  }]);  
  
  const [randId, setRandId] = useState(123);

  return (<>
    <AlurakutMenu githubUser={`${githubUser}`} />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
             Bem Vindo(a), {githubUser}
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subTitle">O que você deseja?</h2>
          <form onSubmit={function handleCreateCommunity(e){
            e.preventDefault();
            const dadoForm = new FormData(e.target);
            
            const comunidade = {
              id: new Date().toISOString(),
              title: dadoForm.get('title'), 
              image: `https://picsum.photos/id/${randId}/300/300`,
              link: dadoForm.get('link')
            };

            setRandId(randId + 1);
            
            console.log('Campo comunidade:', comunidade.title);
            console.log('Campo capa URL:', comunidade.image);

            setComunidades([...comunidades, comunidade]);            
            
          }}>
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade?" 
                type="text"
              />
            </div>
            <div>
              <input 
                placeholder="Coloque uma url para a comunidade" 
                name="link" 
                aria-label="Coloque uma url para a comunidade" 
                type="text"
              />
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>

        <ProfileRelationsBoxWrapper>     
          <h2 className="smallTitle">Comunidades ({comunidades.length})</h2>     
          <ul>          
            {comunidades.slice(0, 6).map( comunidade => {
              return (<li>
                <a href={`${comunidade.link}`} key={comunidade.id}>
                  <img src={`${comunidade.image}`} style={{ borderRadius: '8px' }} />              
                  <span>{comunidade.title}</span>
                </a>
              </li>)
            })}
          </ul>
        </ProfileRelationsBoxWrapper>        

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Pessoas da Comunidades ({pessoasFavoritas.length})</h2>          
          <ul>          
            {pessoasFavoritas.slice(0, 6).map( pessoa => {
              return (<li key={pessoa}>
                <a href={`/users/${pessoa}`} >
                  <img src={`https://github.com/${pessoa}.png`} style={{ borderRadius: '8px' }} />              
                  <span>{pessoa}</span>
                </a>
              </li>)
            })}
          </ul>
        </ProfileRelationsBoxWrapper>        

      </div>      
    </MainGrid>
  </>)
}
