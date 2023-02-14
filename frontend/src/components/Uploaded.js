
//import CheckIcon from '@mui/icons-material/Check';
const Uploaded = ({image , url}) => {

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    alert('Link copied');
  }

  return (
    <div className='flex flex-col h-[50vh] drop-shadow-lg p-5 justify-between bg-white w-4/5 md:w-1/3 sm:w-5/6 rounded-md'>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mx-auto fill-white bg-green p-2 rounded-full">
           <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
      </svg>

        <p className='font-normal text-md sm:text-xl text-center'>Uploaded Successfully!</p>
      </div>
      <div>
        <img src={image}  className='max-w-full mx-auto h-[20vh] mt-4 rounded-md'/>
      </div>
      <div className='relative bg-light-grey p-4 overflow-auto w-full h-12 mt-6 rounded-lg text-xs  align-middle overflow-hidden'>
        {url}
        <button onClick={copy} className='absolute w-1/5 right-1 top-1 bottom-1 bg-blue text-white rounded-lg md:px-4 md:py-1 md:text-xs text-[8px]'>Copy</button>
      </div>
    </div>
  )
}

export default Uploaded
