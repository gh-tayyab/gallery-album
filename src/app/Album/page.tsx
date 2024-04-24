import cloudinary from 'cloudinary'
import FolderList from './FolderList'
export interface FolderType {
    name: string
    path: string
}
const Album = async () => {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: FolderType[]
    }
    return (
        <div>
            <div className='py-5 px-6 '>
                <h2 className=' text-3xl font-semibold tracking-tight'>Picture Album</h2>
            </div>
            {/*  */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4  w-auto px-4'>
                {folders.map((item,i)=>{
                    return(
                        <div key={i}> <FolderList folder={item} /></div>
                    )
                }
                
                )}
              
            </div>
        </div>
    )
}

export default Album
