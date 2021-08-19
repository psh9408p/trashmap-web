import { ApolloProvider, useReactiveVar } from "@apollo/client"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { client, darkModeVar } from "./apollo"
import Layout from "./components/Layout"
import routes from "./routes"
import Home from "./screens/Home"
import TMountain from "./screens/TMountain"
import Test from "./screens/Test"
import { darkTheme, GlobalStyles, lightTheme } from "./styles"

function App() {
  const darkMode = useReactiveVar(darkModeVar)
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route path={routes.home} exact>
              <Layout>
                <Home />
              </Layout>
            </Route>
            <Route path={routes.tMountain}>
              <Layout>
                <TMountain />
              </Layout>
            </Route>
            <Route path={routes.test}>
              <Layout>
                <Test />
              </Layout>
            </Route>
            <Route>
              <Redirect to={routes.home} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
