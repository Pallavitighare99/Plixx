import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload, FiUploadCloud } from 'react-icons/fi';
import { uploadImagesService } from '../Redux/APIs/ImageUploadService';
import Loader from './Notifications/Loader';

function 
Uploader({ setImageUrl }) {
    const [loading, setLoading] = useState(false)

    //upload file

    const onDrop = useCallback(
        async (acceptedFiles) => {
            const file = new FormData()
            file.append('file', acceptedFiles[0])
           const data = await uploadImagesService(file, setLoading)
           setImageUrl(data)
           
        }, [setImageUrl]
    ) 
    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        multiple: false,
       onDrop,
    })
    return (
        <div className='w-full text-center flex flex-col justify-center items-center gap-6'>
            {
                loading ? (
                    <div className='px-6 py-8 w-full border-2 border-border border-dashed bg-main rounded-md'>
                        <Loader />
                    </div>
                ) : (
                    <div
                        {...getRootProps()}
                        className='px-6 py-8 w-full border-2 border-border border-dashed bg-main rounded-md cursor-pointer'>
                        <input {...getInputProps()} />
                        <span className='mx-auto flex flex-col justify-center items-center text-subMain text-3xl'>
                            <FiUploadCloud />
                        </span>
                        <p className='text-sm mt-2'>Drag your image here</p>
                        <em className='text-xs text-border'>
                            {
                                isDragActive ? "Drop it like it's hot!":
                                isDragReject ? "Unsupported file type...":
                                "only .jpg and .png files will be accepted"
                            }
                           
                        </em>
                    </div>
                )
            }

        </div>
    )
}

export default Uploader