import { Fragment } from "react";
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Movie.css";
import axios from "axios";

export default function Movie() {

    const poster = [
        {
            title: "Dr. Stone: New World Part 2", id: 1,
            rate: 3,
            genre: "Shounen, Adventure, Comedy, Sci-Fi",
            score: "Rating : 8",
            img: "https://cdn.myanimelist.net/images/anime/1236/138696l.jpg",
        },
        {
            title: "Sousou no Frieren", id: 2,
            rate: 5,
            genre: "Adventure, Drama, Fantasy",
            score: "Rating : 9",
            img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        },
        {
            title: "Spy x Family Season 2", id: 3,
            rate: 4,
            genre: "Family, Action, Comedy",
            score: "Rating : 8",
            img: "https://cdn.myanimelist.net/images/anime/1975/138482l.jpg",
        },
        {
            title: "Goblin Slayer II", id: 4,
            rate: 4,
            genre: "Gore, Action, Adventure, Fantasy",
            score: "Rating : 8",
            img: "https://cdn.myanimelist.net/images/anime/1100/138338l.jpg",
        },
        {
            title: "Tokyo Revengers: Tenjiku-hen", id: 5,
            rate: 3,
            genre: "Shounen, Delinquents, Time Travel, Action, Drama, Supernatural",
            score: "Rating : 7",
            img: "https://cdn.myanimelist.net/images/anime/1853/139843l.jpg",
        },
        {
            title: "Pluto", id: 6,
            rate: 3,
            genre: "Seinen, Psychological, Action, Mystery, Sci-Fi, Suspense",
            score: "Rating : 8",
            img: "https://cdn.myanimelist.net/images/anime/1021/138568l.jpg",
        },
        {
            title: "Ragna Crimson", id: 7,
            rate: 4,
            genre: "Gore, Action, Adventure, Fantasy",
            score: "Rating : 7",
            img: "https://cdn.myanimelist.net/images/anime/1702/131318l.jpg",
        },
        {
          title: "Kanojo mo Kanojo Season 2", id: 8,
            rate: 3,
            genre: "Shounen,  Harem, School, Comedy, Romance",
            score: "Rating : 7",
            img: "https://cdn.myanimelist.net/images/anime/1063/137100l.jpg",
        },
        {
            title: "Tate no Yuusha no Nariagari Season 3", id: 9,
            rate: 3,
            genre: "Isekai,  Action, Adventure, Drama, Fantasy",
            score: "Rating : 7",
            img: "https://cdn.myanimelist.net/images/anime/1317/139802l.jpg",
        },
        {
            title: "Undead Unluck", id: 10,
            rate: 4,
            genre: "Shounen,Super Power, Action, Comedy, Supernatural",
            score: "Rating : 8",
            img: "https://cdn.myanimelist.net/images/anime/1136/138410l.jpg",
        },
          

    ];
    const data = [
        {
            title: "Sousou no Frieren Umumkan Jumlah Episode", id: 1,
            rate: 4,
            genre: "Anime Sousou no Frieren umumkan jumlah episode untuk seri animenya melalui situs resminya. telah mengumumkan jumlah episode untuk seri animenya...",
            img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
        },
        {
            title: "SPY x FAMILY Season 2 Umumkan Tanggal Rilis!", id: 2,
            rate: 4,
            genre: "Serunya Kembalinya ‘SPY x FAMILY’! Musim Kedua Menjanjikan Lebih Banyak Aksi, Drama, dan Kejutan!", 
            img: "https://animenewsplus.net/wp-content/uploads/2023/09/Spy-x-Family-Code-White-Visual-Cover.webp",
        },
        {
            title: "Manhwa True Beauty Akan Mendapatkan Adaptasi Anime ", id: 3,
            rate: 4,
            genre: "Crunchyroll baru saja mengumumkan adaptasi anime dari manhwa Na-young Kim yang berjudul “True Beauty”.", 
            img: "https://cdn.myanimelist.net/s/common/uploaded_files/1700284235-0364ab06911dd4a8972314996062356c.png",
        },
        {
            title: "Anime Trillion Game Umumkan Cast", id: 4,
            rate: 4,
            genre: "Takeo Ootsuka dan Shouya Ishige akan membintangi anime miliarder tersebut.",
            img:    "https://cdn.myanimelist.net/s/common/uploaded_files/1700767114-02a80a884f31aea2b4e04f77c2e50cfc.png",
        },

        {
            title: "Anime Tadaima, Okaeri Siap Tayang Tahun 2024", id: 5,
            rate: 4,
            genre: "Situs resmi untuk adaptasi anime dari manga Tadaima, Okaeri karya Ichi Ichikawa baru saja diluncurkan. Anime ini dijadwalkan tayang pada tahun 2024.",
            img: "https://animenewsplus.net/wp-content/uploads/2023/11/Tadaima-Okaeri-Visual-1-1446x2048.webp",
        },
    ];

    return (
        <> 
     
        
            <p id="movies">Fall 2023 Anime</p>
            <div className="containerTop" >
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} score={item.score}
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 0 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                <p id="movies">Recent Anime News</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} 
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div>
                {/* <div className="column">
                <p id="movies">Recent Anime News</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardSmall title={item.title} img={item.img} genre={item.genre} 
                            onClick={() => alert("item id = " + item.id)}
                        />
                        {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                    </Fragment>
                ))}
                </div> */}
            </div>
        </>
    );
}
