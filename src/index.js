import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './components/App'
import * as serviceWorker from './serviceWorker'

const client = new ApolloClient({
   uri: ' https://eu1.prisma.sh/reidnate1991-822dab/idea-shop/idea-shop2',
  // uri: 'http://localhost:9002/graphql',
})

const Shell = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)


ReactDOM.render(<Shell />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
