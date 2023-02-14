import { useState } from 'react';
import Form from './components/Form'
import Pending from './components/Pending'
import Uploaded from './components/Uploaded';

function App() {
  const [isPending , setIsPending] = useState(false)
  const [image , setImage] = useState(null)
  const [url , setUrl] = useState(null)
  const [error , setError] = useState(false)
  return (
    <div className="w-full h-screen bg-grey flex justify-center items-center">
      

        {error ? <p className='text-red-600 text-center border-red-600 rounded-lg border-2 bg-red-300 px-4 py-2'>internal server error , Refresh the page and try again</p> :
        isPending ? <Pending/> : image && url ? <Uploaded image={image} url={url} /> : <Form image={image} setImage={setImage} setIsPending={setIsPending} setUrl={setUrl} setError={setError}/>}
        
    </div>
  );
}

export default App;
