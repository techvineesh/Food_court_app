import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Saiganesh",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "45",
            cuisine: "Indian",
        },
        {
            name: "Nandu ",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "75",
            cuisine: "American",
        },
        {
            name: "Rajkumar",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "43",
            cuisine: "Indian",
        },
        {
            name: "Janamaas",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "48",
            cuisine: "Mexican"
        },
        {
            name: "Vijay yadam",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "20",
            cuisine: "Korean"
        },
        {
            name: " Sunil",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "34",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}