import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header() { 
	return (
		<header className='Header' style ={{
			background : 'grey'
		}}>
		</header>
	)
}

function SideBarSection() {
	return (
		<details style ={{
		}}> 
			<summary></summary>
			<summary style={{
				marginLeft : '15px',
			}}></summary>
		</details>
	)
}

function SideBar() {
	return (
		<article className = 'SideBar' style ={{
			background : 'red',
			height : '100%',
			width :  '100%',
			minWidth : '250px',
			maxWidth : '400px',
			padding : '15px',
			boxSizing : 'border-box',
		}}>
			<div style ={{
				background : 'yellow',
				height : '100%',
				width :  '100%',
			}}>
				<SideBarSection/>
			</div>
		</article>
	)
}

function Content() {
	return (
		<>
			<article className='TopPanel'>
				<div className='TopPanelElement' style ={{
					width : '35px',
					height : '35px',
					background : 'blue',
				}}>

				</div>
				<div className='TopPanelElement' style ={{
					width : '35px',
					height : '35px',
					background : 'red',
				}}>

				</div>
				<div className='TopPanelElement' style ={{
					width : '35px',
					height : '35px',
					background : 'green',
				}}>

				</div>
				<div className='TopPanelElement' style ={{
					width : '35px',
					height : '35px',
					background : 'blue',
				}}>

				</div>
			</article>
			<article style ={{
				background : 'green',
				height : '100%',
				width : '100%',
				minWidth : '600px',
			}}>
				Some
			</article>
		</>
	)
}

function MainBody() {
	return ( 

		
		<div className='MainBody'>
			<SideBar/>
			<Content/>
		</div>
	)
}

function App() {
	return (
		<>
			<Header/>
			<MainBody/>
			<footer>
			</footer>
		</>
  );
}

export default App;
