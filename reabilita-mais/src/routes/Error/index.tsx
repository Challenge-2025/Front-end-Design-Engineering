import xError from '../../img/icons8-x-160.png'

export default function Error(){

    return(
        <main className="bg-[linear-gradient(139deg,#450d73_0%,#e99fed_52%,#f7f2f7_98%)] h-auto w-[100%] flex-col text-[#D9D9D9] flex items-center justify-center gap-[8rem] overflow-auto">
            <main className="h-screen w-full flex flex-coll justify-center items-center">
                <article className="px-3 sm:px-4 py-2 rounded-2xl bg-white/20 text-white border border-white/30 focus:ring-2 focus:ring-purple-400 text-center w-[40%] h-[40vh] flex flex-col justify-center items-center gap-4">
                        <img src={xError} alt="Erro 404 - Not Found" />
                        <h1 className='font-bold text-[2.5rem]'>Not Found. Erro 404 </h1>
                </article>
            </main>
        </main>
    );
}