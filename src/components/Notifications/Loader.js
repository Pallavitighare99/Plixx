import { PuffLoader } from "react-spinners";

function Loader(){
    return( 
        <div className="w-full py-4 px-2 flex flex-col justify-center items-center">
            <PuffLoader color="#F20000"/>
        </div>
    )
}

export default Loader