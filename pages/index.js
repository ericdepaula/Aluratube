import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
	const estilosDaHomePage = {
		// backgroundColor: "red" 
	};

	// console.log(config.playlists);

	return (
		<>
			<CSSReset />
			<div style={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
				// backgroundColor: "red",
			}}>
				<Menu />
				<Header />
				<Timeline playlists={config.playlists}>
					Conteúdo
				</Timeline>
			</div>
		</>
	);
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }


const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        /* margin-top: 50px; */
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
	.banner{
      position: flex;
      width: 1512px 100%;
      height: 230px;
      left: 0px;
      top: 56px;

      background: url("https://images.unsplash.com/photo-1450849608880-6f787542c88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80");
	}
`;
// function Banner() {
// 	return (
// 		<StyledHeader>
// 			<section className="banner"></section>
// 		</StyledHeader>
// 	)
// }
function Header() {
	return (
		<StyledHeader>
			<div className="banner"></div>
			<section className="user-info">
				<img src={`https://github.com/${config.github}.png`} />
				<div>
					<h2>
						{config.name}
					</h2>
					<p>
						{config.job}
					</p>
				</div>
			</section>
		</StyledHeader>
	)
}

function Timeline(propriedades) {
 
	const playlistNames = Object.keys(propriedades.playlists);

	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = propriedades.playlists[playlistName];
				console.log(playlistName);
				console.log(videos);
				return (
					<section>
						<h2>{playlistName}</h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.url}>
										<img src={video.thumb} />
										<span>
											{video.title}
										</span>
									</a>
								)
							})}
						</div>
					</section>
				)
			})}
		</StyledTimeline>
	)
}