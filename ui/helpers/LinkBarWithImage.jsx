import { Link } from "react-router-dom"

export const LinkBarWithImage = ({ path ='',
     title = '', 
     src = ''}) => {
  return (
    
    <Link
        to={`/${ path}`}
    >
        <div className="flex justify-center items-center gap-2">
            <img src={` ${src}` } alt={ `Image-${src}`} className="w-20 h-20" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> 
                {title}
            </span>

        </div>
    </Link>

    )
}
