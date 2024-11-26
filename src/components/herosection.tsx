import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function herosection(){
    return(
            <div className="h--auto md:h-[40rem] w-full rounded-md flex flex-col items-center 
            justify-center relative
             overflow-hidden mx-auto py-10 md:py-0 "
             > 
           <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
          />
                <div className="p-4 relative z-10 w-full text-center">
                 <h1 
                 className=" mt-20 md:mt-0 text-4xl md:text-7xl
                 font-bold bg-clip-text text-transparent
                 bg-gradient-to-b from-neutral-50 to-neutral-400
                 "
                 >Master the art of music</h1>
                 <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">I help people communicate more clearly, more easily, 
                    more effectively and more beautifully so they can sing and speak any note,
                     any phrase and any song with more freedom and health.
                </p>
                </div>
                <div >
                    <Link href={"/courses"} >
                        <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black
                        text-black dark:text-white
                        border-neutral-200 dark:border-slate-800">
                       explore courses
                       </Button>
                    </Link>
                </div>
                 </div>
        
    )
}

export default herosection