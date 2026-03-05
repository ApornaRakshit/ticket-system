import vector from "../../assets/vector1.png";

const Banner = ({ progressCount, resolvedCount }) => {
    return (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mt-10 px-4">
            <div
                className="rounded-xl p-12 text-center text-white"
                style={{
                    backgroundImage: `linear-gradient(90deg,#6D28D9,#9333EA), url(${vector})`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay"
                }}
            >
                <p className="text-lg">In-Progress</p>
                <h1 className="text-5xl font-bold">{progressCount}</h1>
            </div>
            <div
                className="rounded-xl p-12 text-center text-white"
                style={{
                    backgroundImage: `linear-gradient(90deg,#22C55E,#059669), url(${vector})`,
                    backgroundSize: "cover",
                    backgroundBlendMode: "overlay"
                }}
            >
                <p className="text-lg">Resolved</p>
                <h1 className="text-5xl font-bold">{resolvedCount}</h1>
            </div>

        </div>
    );
};

export default Banner;