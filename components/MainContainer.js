import A from "./A";
import Head from "next/head";


const MainContainer = ({children, keywords}) => {
    return (
        <>

            <Head>
                <meta keywords={"smth, nextjs" + keywords} />
                <title> Главная страница</title>
            </Head>

            <div className="navbar">
                <A href={"/"} text={"Main"}> </A>
                <A href={"/users"} text={"Users"}> </A>


            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar{
                  background: orange;
                  padding: 15px;
                  }
                  
                `}
            </style>
        </>
    );
};

export default MainContainer;