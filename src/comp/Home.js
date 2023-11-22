import React, {
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.scss";
import { myContext } from "./Context";

function Home() {
    const { src, setSrc } = useContext(myContext);
    const [scrollPosition, setScrollPosition] = useState(0);
    const mainSectionRef = useRef(null);

    // Function to handle scroll event and update scroll position state
    const POYScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    // Update scroll position on scroll event
    useEffect(() => {
        window.addEventListener("scroll", POYScroll);
        return () => {
            window.removeEventListener("scroll", POYScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        window.addEventListener("scroll", POYScroll);
                    } else {
                        window.removeEventListener("scroll", POYScroll);
                    }
                });
            },
            { threshold: 0.5 } // Adjust threshold as needed
        );

        observer.observe(mainSectionRef.current);

        return () => {
            observer.unobserve(mainSectionRef.current);
        };
    }, []);

    const helloOffset = scrollPosition * 1.5;

    const works = [
        {
            id: 1,
            name: "LionHill",
            desc: "기존 펜션 사이트 라이언힐을 리뉴얼화하여 만든 팀 프로젝트",
            img: "./facilites_logo.png",
            siteHref: "https://git-jy.github.io/LionHill/index.html",
            gitHref: "",
            vHref: "",
        },
        {
            id: 2,
            name: "장 보는 날",
            desc: "react를 이용하여 물가변동 api를 활용하여 만든 팀 프로젝트",
            img: "/mainlogo.png",
            siteHref: "https://grocery-umber.vercel.app/",
            gitHref: "",
            vHref: "",
        },
        {
            id: 3,
            name: "3분을 버텨라",
            desc: "react를 활용한 끝말잇기 미니게임",
            img: "./world_earth.png",
            siteHref: "https://uwoooj.github.io/ending_game/",
            gitHref: "",
            vHref: "",
        },
        {
            id: 4,
            name: "Selecto Coffee",
            desc: "프랜차이즈 커피 브랜드 셀렉토 적응형 모바일 ver",
            img: "./selec_logo.png",
            siteHref: "https://uwoooj.github.io/clon/0725/main_index.html",
            gitHref: "",
            vHref: "",
        },
        {
            id: 5,
            name: "Andar",
            desc: "스포츠 웨어 브랜드 안다르 적응형 모바일 ver  \n 간결한 레이아웃 구조화에 중점을 둔 클론코딩 ",
            img: "./andar.png",
            siteHref: "",
            gitHref: "",
            vHref: "",
        },
        {
            id: 6,
            name: "Naver",
            desc: "대한민국 포털사이트 네이버 적응형 모바일ver",
            img: "/naver.png",
            siteHref: "",
            gitHref: "",
            vHref: "",
        },
        {
            id: 7,
            name: "Kakao Mobility",
            desc: "카카오 모빌리티 반응형 PC ver",
            img: "./mobility.png",
            siteHref: "",
            gitHref: "",
            vHref: "",
        },
        {
            id: 8,
            name: "서울시청",
            desc: "웹 접근성 품질 인증을 받은 서울시청 적응형 PC ver",
            img: "./seoul_logo.jpg",
            siteHref: "",
            gitHref: "",
            vHref: "",
        },
    ];

    function thumbMove(e) {
        let pos = { y: e.clientY, x: e.clientX };

        const thumb = document.querySelector(".thumb");
        thumb.style = `left:${pos.x - 100}px; top:${
            pos.y - 100
        }px;display:block;`;
    }

    useEffect(() => {
        const list = document.querySelector(".list");
        const li = document.querySelectorAll(".list li");

        li.forEach((ele) => {
            ele.addEventListener("mousemove", thumbMove);
            ele.addEventListener("mouseover", thumbMove);
        });
        list.addEventListener("mouseleave", () => {
            document.querySelector(".thumb").style = "display:none";
        });

        const contactSection = document.querySelector(".contact");
        contactSection.addEventListener("mouseenter", () => {
            document.querySelector(".thumb").style.display = "none";
        });

        const twoBoxSections = document.querySelectorAll(".two_box");
        // 모든 'two_box' 섹션에 대해 이벤트 리스너를 추가합니다.
        twoBoxSections.forEach((box) => {
            
            box.addEventListener("mouseenter", (e) => {
                const thumb = document.querySelector(".thumb");
                thumb.parentElement.style.display = 'none';
            });

            box.addEventListener("mouseleave", (e) => {
                const thumb = document.querySelector(".thumb");
                thumb.parentElement.style.display = 'block';
            });
        });
    }, [setSrc]);

    return (
        <div className="wrap">
            <section className="main" ref={mainSectionRef}>
                <strong
                    className="point"
                    style={{ marginLeft: `${helloOffset}px` }}
                >
                    HELLO
                </strong>
                <div className="move-bg">
                    <div data-aos="zoom-in" className="txt">
                        <p>Front-end</p>
                        <p>
                            {" "}
                            Devel
                            <span>
                                <img src="./o.png"></img>
                            </span>
                            per
                        </p>
                        <p className="eart">PORTFOLIO@2023</p>
                    </div>
                </div>
            </section>
            <section className="intro">
                <strong className="point">INTRO</strong>
                <p>
                    무너지지않는 끈기와 개발을 사랑하는 신입 웹프론트엔드
                    김유진입니다. 탄탄한 마크업을 기본으로 효율적인 코드의 CSS,
                    시선을 이끄는 동적인 Javascript를 추구하며 React, Vue.js
                    같은 프레임워크로 다채로운 경험을 쌓았습니다. 누구에게나
                    만족스러운 사용자 경험을 제공하는 웹 프론트엔드를
                    꿈꾸고있습니다. 발전하는 새로운 기술과 다양한 프레임워크에
                    대한 공부도 꾸준히 이어나가도록 노력할것입니다.
                </p>
            </section>
            <section className="project">
                <div className="move-bg">
                    <h2>PROJECT</h2>
                    <figure>
                        <img src={src} class="thumb"></img>
                    </figure>
                    {works.map((item) => (
                        <ul
                            onMouseOver={() => {
                                setSrc(item.img);
                            }}
                            className="list"
                        >
                            <li data-num={item.id}>
                                <a>
                                    <div className="one_box">
                                        <strong className="title">
                                            {item.name}
                                        </strong>
                                        <p>{item.desc}</p>
                                    </div>
                                    {/* <figure>
                                    <img src={item.img}></img>
                                    </figure> */}
                                    <div className="two_box">
                                        <a href={item.siteHref} target="_blank">
                                            site view
                                            <img
                                                src="./arrow.png"
                                                className="arow"
                                                alt=""
                                            ></img>
                                        </a>
                                        <div className="icon">
                                            <a href="">
                                                <span className="link">
                                                    <img
                                                        src="./github.png"
                                                        alt=""
                                                        className="hub"
                                                    ></img>
                                                    <img
                                                        src="./velog.png"
                                                        alt=""
                                                        className="log"
                                                    ></img>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    ))}
                </div>
            </section>
            <section className="contact">
                <div className="area">
                    <div
                        className="tit"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        <a href="mailto:dbwls9610@navr.com">LET's talk</a>
                    </div>

                    <div className="cont_wrap">
                        <div className="card">
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>

                        <div className="link">
                            <p>CONTANT ME!</p>
                            <span className="wrap">
                                <a href="">
                                    <img src="./github.png" alt=""></img>
                                </a>
                                <a href="">
                                    <img src="./velog.png" alt=""></img>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="tag">
                    <div className="move">
                        <span>
                            &nbsp;Front-end &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; NEXT.JS
                            &nbsp;&nbsp;&nbsp; MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;Front-end &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; NEXT.JS
                            &nbsp;&nbsp;&nbsp; MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;Front-end &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; NEXT.JS
                            &nbsp;&nbsp;&nbsp; MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            Front-end &nbsp;&nbsp;&nbsp; 감각 &nbsp;&nbsp;&nbsp;
                            SCSS &nbsp;&nbsp;&nbsp; HTML &nbsp;&nbsp;&nbsp;
                            jQury &nbsp;&nbsp;&nbsp; NEXT.JS &nbsp;&nbsp;&nbsp;
                            MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    <div className="move move2">
                        <span>
                            Front-end &nbsp;&nbsp;&nbsp; 감각 &nbsp;&nbsp;&nbsp;
                            SCSS &nbsp;&nbsp;&nbsp; HTML &nbsp;&nbsp;&nbsp;
                            jQury &nbsp;&nbsp;&nbsp; NEXT.JS &nbsp;&nbsp;&nbsp;
                            MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;Front-end &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; NEXT.JS
                            &nbsp;&nbsp;&nbsp; MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;Front-end &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; NEXT.JS
                            &nbsp;&nbsp;&nbsp; MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            &nbsp;Front-end &nbsp;&nbsp;&nbsp; 감각
                            &nbsp;&nbsp;&nbsp; SCSS &nbsp;&nbsp;&nbsp; HTML
                            &nbsp;&nbsp;&nbsp; jQury &nbsp;&nbsp;&nbsp; NEXT.JS
                            &nbsp;&nbsp;&nbsp; MONGODB &nbsp;&nbsp;&nbsp;
                        </span>
                    </div>
                    {/* <div className="line">
                        <span>
                            React.js &nbsp;&nbsp;&nbsp; Javascript
                            &nbsp;&nbsp;&nbsp; 웹접근성 &nbsp;&nbsp;&nbsp;
                            Next.js &nbsp;&nbsp;&nbsp; Github &nbsp;&nbsp;&nbsp;
                            책임감 &nbsp;&nbsp;&nbsp; Steady &nbsp;&nbsp;&nbsp;
                            협업 &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            React.js &nbsp;&nbsp;&nbsp; Javascript
                            &nbsp;&nbsp;&nbsp; 웹접근성 &nbsp;&nbsp;&nbsp;
                            Next.js &nbsp;&nbsp;&nbsp; Github &nbsp;&nbsp;&nbsp;
                            책임감 &nbsp;&nbsp;&nbsp; Steady &nbsp;&nbsp;&nbsp;
                            협업 &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            React.js &nbsp;&nbsp;&nbsp; Javascript
                            &nbsp;&nbsp;&nbsp; 웹접근성 &nbsp;&nbsp;&nbsp;
                            Next.js &nbsp;&nbsp;&nbsp; Github &nbsp;&nbsp;&nbsp;
                            책임감 &nbsp;&nbsp;&nbsp; Steady &nbsp;&nbsp;&nbsp;
                            협업 &nbsp;&nbsp;&nbsp;
                        </span>
                        <span>
                            React.js &nbsp;&nbsp;&nbsp; Javascript
                            &nbsp;&nbsp;&nbsp; 웹접근성 &nbsp;&nbsp;&nbsp;
                            Next.js &nbsp;&nbsp;&nbsp; Github &nbsp;&nbsp;&nbsp;
                            책임감 &nbsp;&nbsp;&nbsp; Steady &nbsp;&nbsp;&nbsp;
                            협업 &nbsp;&nbsp;&nbsp;
                        </span>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Home;
