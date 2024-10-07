import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { BookCheckoutPage } from './layouts/BookCheckoutPage/BookCheckoutPage';
import { oktaConfig } from './lib/oktaConfig';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth(oktaConfig)

export const App = () => {

  const customeAuthHandler = () => {
    history.push('/login')
  }

  const history = useHistory()

  const restoreOriginalUri = async (_oktaAuth:any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin))

  }


  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      {/* Switch tag ensure there is only one route component rendered each time */}
      <div className='flex-grow-1'>
        <Switch>
          {/* exact ensure a strict matching with the url, bec react rout v5 use partial matching*/}
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home'>
            <HomePage />
          </Route>

          <Route path='/search'>
            <SearchBooksPage />
          </Route>
          {/* pass dynamic data in the URL using route parameters */}
          <Route path='/checkout/:bookId'>
            <BookCheckoutPage/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  )
}