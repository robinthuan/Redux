import React,{ Component } from 'react'
import { Provider } from 'react-redux'
import App from './layout/app.js'
import store from './store/store.js'
export default class Index extends Component{
render()
{
return(
<Provider store={store}>
<App/>
</Provider>
);

}



}