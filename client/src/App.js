import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Articles from './components/Articles';
import AddArticle from './components/AddArticle'
import EditArticle from './components/EditArticle';
import Detail from './components/Detail';

import getArticlesAction from './redux/action/getArticlesAction'


function App({fetchArticles}) {

  useEffect(() => {
      fetchArticles();
  },[]);

  return (
    <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
              <Route exact path="/" component={Articles} />
              <Route path="/add-article" component={AddArticle}/>
              <Route path="/edit-article/:id" component={EditArticle}/>
              <Route path="/detail/:id" component={Detail}/>
            </Switch>
        </div>
        <Footer/>
    </div>
  );
}

const mapStateToProps = state => ({
  articles: state.articles.articles,
  loading: state.articles.loading
})

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(getArticlesAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
