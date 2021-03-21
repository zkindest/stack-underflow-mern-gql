import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'

const Container = tw.span`flex items-center h-auto `

const TagWord = tw.span`flex items-center h-auto rounded-sm bg-blue-200 bg-opacity-75`

const Tag = ({ to, children, label, count }) => (
  <Container>
    <TagWord>
      <Link to={to} tw=" text-blue-600 no-underline text-xs px-2">
        {label || children}
      </Link>
    </TagWord>
    {count && (
      <div tw="text-xs text-blue-600 inline">&nbsp; {` × ${count}`}</div>
    )}
  </Container>
)

export const Tags = styled.div(props => [
  `
	span + span {
    ${props.col && props.col ? `margin-top: .2em` : `margin-left: .2em`}
	}
`,
  tw`flex flex-wrap`,
  props.col ? tw`flex-col` : tw`flex-row`,
  props.floatLeft && tw`float-left`,
])
export default Tag
