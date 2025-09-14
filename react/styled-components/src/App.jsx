import { StyledContainer } from "./components/styled"
import { Button } from "./components/Button"

function App() {
  return (
    <>
      <h1>Styled Component</h1>
      <p>This is a simple React application using Styled Component.</p>
      <StyledContainer>
        Hello, Styled Component!
        <Button>Click Me</Button>
      </StyledContainer>
    </>
  )
}

export default App
