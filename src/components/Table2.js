import React from 'react'
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { GoEye } from 'react-icons/go'
import { Link } from 'react-router-dom';
import { DateFormat, shortUpperCaseID } from './Notifications/Empty';

const Head = 'text-xs text-left text-dry font-semibold px-6 py-2 uppercase';
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";



//rows
const Rows = ({ data, users, onEditFunction, onDeleteFunction }) => {

  return (
    //users
    <tr >
      {
        users ? (
          <>
            <td className={`${Text}`}>
              <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                <img
                  className='w-full h-full object-cover'
                  src={`${data?.image ? data.image : '/images/user2.png'}`}
                  alt={data?.fullName}
                />
              </div>
            </td>
            <td className={`${Text}`}>{data?._id ? shortUpperCaseID(data._id) : "2R7578"}</td>
            <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
            <td className={`${Text}`}>{data?.fullName}</td>
            <td className={`${Text}`}>{data?.email}</td>
            <td className={`${Text}`}>{data?.isAdmin ? "Admin": "User"}</td>
            <td className={`${Text} float-right flex flex-row justify-center items-center gap-2`}>
              {
                !data?.isAdmin && <button
                onClick={() => onDeleteFunction(data?._id)}
                className='bg-subMain  text-white rounded flex flex-col justify-center items-center w-6 h-6'>
                  <MdDelete />
                </button>
              }

            </td>
          </>
        ) : (
          //categories
          <>
            <td className={`${Text} font-bold`}>{data?._id ? shortUpperCaseID(data._id) : "2R7578"}</td>
            <td className={`${Text}`}>{DateFormat(data?.createdAt)}</td>
            <td className={`${Text}`}>{data?.title}</td>
            <td className={`${Text} float-right flex flex-row justify-center items-center gap-2`}>

              <button
                onClick={() => onEditFunction(data)}
                className='border border-border bg-dry flex flex-row justify-center items-center gap-2 text-border rounded py-1 px-2'>
                Edit<FaEdit className='text-green-500' />
              </button>
              <button onClick={() => onDeleteFunction(data._id)} className='bg-subMain  text-white rounded flex flex-col justify-center items-center w-6 h-6'>
                <MdDelete />
              </button>
            </td>

          </>
        )

      }
    </tr>


  )
}

//table
function Table2({ data, users, onEditFunction, onDeleteFunction }) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
      <table className='w-full table-auto border border-border divide-y divide-border'>
        <thead>
          <tr className='bg-dryGray'>
            {
              users ? (
                <>
                  <th scope='col' className={`${Head}`}>
                    Image
                  </th>
                  <th scope='col' className={`${Head}`}>
                    Id
                  </th>
                  <th scope='col' className={`${Head}`}>
                    Date
                  </th>
                  <th scope='col' className={`${Head}`}>
                    Full Name
                  </th>
                  <th scope='col' className={`${Head}`}>
                    Email
                  </th>
                  <th scope='col' className={`${Head}`}>
                    Role
                  </th>
                </>

              )
                :
                (
                  <>
                    <th scope='col' className={`${Head}`}>
                      Id
                    </th>
                    <th scope='col' className={`${Head}`}>
                      Date
                    </th>
                    <th scope='col' className={`${Head}`}>
                      Title
                    </th>
                  </>
                )
            }
            <th scope='col' className={`${Head} text-end`}>
              Action
            </th>

          </tr>
        </thead>
        <tbody className='bg-main divide-y divide-gray-800'>
          {data.map((data, i) =>
            <Rows key={i} data={data} users={users} onEditFunction={onEditFunction} onDeleteFunction={onDeleteFunction} />
          )}

        </tbody>

      </table>
    </div>
  )
}

export default Table2