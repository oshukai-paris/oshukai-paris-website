import React from 'react';
import oshukaiKarateLogo from '../images/oshukai-karate.png';
import oshukaiKobudoLogo from '../images/oshukai-kobudo.png';

import './style.scss';

const Teachers = () => (
	<div>

		<section className="section">

			<div className="container content">
				<p className="title">Les Professeurs</p>

				<p>Tous les professeurs suivent l’enseignement de senseï
					Kenyu Chinen depuis plus de 15 ans.</p>
			</div>

			<div className="container">
				<div className="columns">

					<div className="column is-one-third">

						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png"/>
								</figure>
							</div>

							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<figure className="image is-48x48">
										<img src={oshukaiKarateLogo}/>
										</figure>
									</div>
									<div className="media-content">
										<p className="title is-4">François Avril</p>
										<p className="subtitle is-6">Karaté, Ceinture Noire 3ème Dan</p>
									</div>
								</div>

								<div className="content">
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Phasellus nec iaculis mauris.
									</p>

									<p>Contact: 06 00 00 00 00</p>
								</div>
							</div>
						</div>
					</div>

					<div className="column is-one-third">

						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png"/>
								</figure>
							</div>

							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<figure className="image is-48x48">
										<img src={oshukaiKarateLogo}/>
										</figure>
									</div>
									<div className="media-content">
										<p className="title is-4">Gérard Zamour</p>
										<p className="subtitle is-6">Karaté, Ceinture Noire 2ème Dan</p>
									</div>
								</div>

								<div className="content">
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Phasellus nec iaculis mauris.
									</p>

									<p>Contact: 06 00 00 00 00</p>
								</div>
							</div>
						</div>
					</div>

					<div className="column is-one-third">

						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
								<img src="https://bulma.io/images/placeholders/1280x960.png"/>
								</figure>
							</div>

							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<figure className="image is-48x48">
										<img src={oshukaiKobudoLogo}/>
										</figure>
									</div>
									<div className="media-content">
										<p className="title is-4">Nicolas Gaubert</p>
										<p className="subtitle is-6">Kobudo, Ceinture Noire 4ème Dan</p>
									</div>
								</div>

								<div className="content">
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Phasellus nec iaculis mauris.
									</p>

									<p>Contact: 06 00 00 00 00</p>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>

		</section>
	</div>
);

export default Teachers;
