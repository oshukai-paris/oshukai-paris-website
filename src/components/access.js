import React from 'react';
import {
	FaLocationArrow, FaClock, FaThumbsUp,
} from 'react-icons/fa';
import './style.scss';

const Access = () => (
    <div>

        <section className="section">
			<div className="container content">

				<p className="title">Bienvenue sur le site d'Oshukai Paris</p>

				<p>
                    Oshukai Paris est un club de Karaté Shorin Ryu
                    et de Kobudo traditionel d'Okinawa.
                </p>

			</div>

			<div className="container">

				<div className="columns">

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaLocationArrow size="fa-2x"/>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">

									<h1 className="title is-size-4">Où nous trouver</h1>
									<p className="subtitle is-size-5">
										3 Villa d'Orléans,<br/>
										75014 Paris.
									</p>

									<div className="gmap_canvas">
										<iframe
											id="gmap_canvas"
											src="https://maps.google.com/maps?q=oshukai%20paris%20france&t=&z=15&ie=UTF8&iwloc=&output=embed"
											frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
										</iframe>
									</div>

								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaClock size="fa-2x"/>
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Les horaires</h1>
									<div className="table-container">
										<table className="table is-narrow">
											<thead>
												<tr>
													<th></th>
													<th>Mardi</th>
													<th>Mercredi</th>
													<th>Jeudi</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Karaté Adultes</td>
													<td>19h-20h30</td>
													<td></td>
													<td>20h30-22h</td>
												</tr>
												<tr>
													<td>Karaté Enfants</td>
													<td></td>
													<td>15h-16h</td>
													<td></td>
												</tr>
												<tr>
													<td>Kobudo</td>
													<td></td>
													<td></td>
													<td>19h-20h30</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</article>
					</div>

					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaThumbsUp size="fa-2x" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Cours d'Essai</h1>
									<p className="subtitle is-size-5">
										Venez assister gratuitement à un cours
										d'essai quand vous le souhaitez.
									</p>
								</div>
							</div>
						</article>
					</div>

				</div>
			</div>
		</section>

    </div>
);

export default Access;
