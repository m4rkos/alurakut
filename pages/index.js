import styled from 'styled-components'
import Box from '../src/components/Box';
import MainGrid from '../src/components/MainGrid';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/MoowKutCommons'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar(propriedade) {
  return (
    <Box>
      <img src={`https://github.com/${propriedade.githubUser}.png`} style={{ borderRadius: '8px' }} />
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
  ]

  return (<>
    <AlurakutMenu githubUser={`${githubUser}`} />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          <h1 className="title">
             Bem Vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidades ({pessoasFavoritas.length})
          </h2>
          

          <ul>          
            {pessoasFavoritas.map( pessoa => {
              return (<li>
                <a href={`/users/${pessoa}`} key={pessoa}>
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
