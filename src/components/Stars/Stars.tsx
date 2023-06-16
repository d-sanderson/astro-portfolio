import { createMachine } from 'xstate';
import './Stars.css'
import classNames from 'classnames';
import { useMachine } from '@xstate/react';
import { useStore } from '@nanostores/react';
import { toggle } from '../../stores/toggleStore';
import { useEffect, useRef } from 'react';


interface Props {
  currentPath: string
}

const Stars = ({ currentPath }: Props) => {

  const $toggle = useStore(toggle)
  const starMachine = createMachine({
    id: 'toggle',
    initial: 'inactive',
    states: {
      inactive: {
        on: { TOGGLE: 'active' }
      },
      active: {
        on: { TOGGLE: 'inactive' }
      }
    },
  });
  const [state, send] = useMachine(starMachine, { devTools: true})

  const hasRendered = useRef(false)
  useEffect(() => { hasRendered.current = true }, [])
  useEffect(() => {
    
    if(hasRendered) {
      send('TOGGLE')
      console.log(state.toStrings())
    }
  }, [$toggle])
  console.log(hasRendered)
  return (
    <div className={classNames("bg-stars-animated")}>
      <svg className={classNames("starContainer", {"starInner--animated": state.matches('active')})}><svg className="star " x="80%" y="15%">
        <g className="starContent" transform="scale(0.5)">
          <g className="starInner">
            <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
          </g>
        </g>
      </svg><svg className="star " x="12%" y="58%">
          <g className="starContent" transform="scale(0.4)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star " x="5%" y="35%">
          <g className="starContent" transform="scale(0.5)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star " x="10%" y="70%">
          <g className="starContent" transform="scale(0.25)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="15%" y="52%">
          <g className="starContent" transform="scale(0.35)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--accent" x="25%" y="35%">
          <g className="starContent" transform="scale(0.25)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="47%" y="42%">
          <g className="starContent" transform="scale(0.5)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="58%" y="52%">
          <g className="starContent" transform="scale(0.3)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="10%" y="50%">
          <g className="starContent" transform="scale(0.4)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--accent" x="20%" y="30%">
          <g className="starContent" transform="scale(0.25)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="40%" y="30%">
          <g className="starContent" transform="scale(0.5)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star " x="85%" y="20%">
          <g className="starContent" transform="scale(0.25)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="70%" y="20%">
          <g className="starContent" transform="scale(0.35)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--accent" x="90%" y="10%">
          <g className="starContent" transform="scale(0.35)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="75%" y="10%">
          <g className="starContent" transform="scale(0.25)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="75%" y="25%">
          <g className="starContent" transform="scale(0.5)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="51%" y="82%">
          <g className="starContent" transform="scale(0.5)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--accent" x="21%" y="36%">
          <g className="starContent" transform="scale(0.3)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="28%" y="5%">
          <g className="starContent" transform="scale(0.2)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star " x="32%" y="8%">
          <g className="starContent" transform="scale(0.5)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--accent" x="65%" y="60%">
          <g className="starContent" transform="scale(0.25)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="70%" y="49%">
          <g className="starContent" transform="scale(0.35)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star " x="87%" y="13%">
          <g className="starContent" transform="scale(0.3)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="25%" y="78%">
          <g className="starContent" transform="scale(0.25)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--bright" x="55%" y="47%">
          <g className="starContent" transform="scale(0.5)">
            <g className="starInner">
              <path fill="#8a4baf" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg><svg className="star star--accent" x="41%" y="72%">
          <g className="starContent" transform="scale(0.35)">
            <g className="starInner">
              <path fill="#ffb238" fill-rule="evenodd" className="starBackground css-1rxdz5j" d="M13.136,5.728 C11.5573333,5.728 10.272,4.44266667 10.272,2.864 C10.272,1.29066667 9.248,0 8,0 C6.752,0 5.728,1.29066667 5.728,2.864 C5.728,4.44266667 4.44266667,5.728 2.864,5.728 C1.29066667,5.728 0,6.752 0,8 C0,9.248 1.29066667,10.272 2.864,10.272 C4.44266667,10.272 5.728,11.5573333 5.728,13.136 C5.728,14.7093333 6.752,16 8,16 C9.248,16 10.272,14.7093333 10.272,13.136 C10.272,11.5573333 11.5573333,10.272 13.136,10.272 C14.7093333,10.272 16,9.248 16,8 C16,6.752 14.7093333,5.728 13.136,5.728 Z"></path>
            </g>
          </g>
        </svg></svg></div>
  )
}

export default Stars
