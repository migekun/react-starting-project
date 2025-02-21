import { useState } from 'react'
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function closeModalHandler() {
    setModalIsVisible(false);
  }
  function openModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={openModalHandler}/>
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={closeModalHandler}/>  
      </main>
    </>
  )
}

export default App
