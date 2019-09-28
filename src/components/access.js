import React from 'react';
import {FaLocationArrow, FaClock} from 'react-icons/fa';
import './style.scss';


const Map = (props) => (
	<article className="media">
		<figure className="media-left">
			<span className="icon is-medium">
				<FaLocationArrow />
			</span>
		</figure>

		<div className="media-content">

			<div className="content">
				<h1 className="title is-size-5">{props.title}</h1>
				<p
					className="subtitle is-size-6"
					dangerouslySetInnerHTML={{ __html: props.address }}
				/>

				<div className="gmap_canvas">
					<iframe
						id="gmap_canvas"
						src={props.map_url}
						frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
					</iframe>
				</div>
			</div>
		</div>

	</article>
);

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

				<div className="container content">
					<p className="title">Nos Dojos</p>

					<p>
						Oshukai Paris dispose de deux dojos dans le 14ème
						arrondissement de Paris, respectivement dédiés aux
						cours enfants et adultes.
					</p>

					<p>
						Un cours d’essai gratuit est possible à n'importe quel
						moment de l'année pour toute personne voulant essayer
						la pratique du Karaté ou du Kobudo.
					</p>
				</div>

				<div className="columns">

					<div className="column">
						<Map
							title="Cours Adultes"
							address="Espace Villa d’Orléans<br/>3 Villa d'Orléans<br/>75014 Paris"
							map_url="https://maps.google.com/maps?q=oshukai%20paris%20france&t=&z=15&ie=UTF8&iwloc=&output=embed"
						/>
					</div>

					<div className="column">
						<Map
							title="Cours Enfants"
							address="Centre de Danse Alésia<br/>119 Avenue du Général Leclerc<br/>75014 Paris"
							map_url="https://maps.google.com/maps?q=centre%20de%20danse%20paris%20al%C3%A9sia&t=&z=15&ie=UTF8&iwloc=&output=embed"
						/>
					</div>

				</div>

				<article className="media">
					<figure className="media-left">
						<span className="icon is-medium">
							<FaClock/>
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="title is-size-4">Les horaires</h1>
							<div className="table-container">
								<table className="table is-hoverable">
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
											<td>Kobudo Adultes</td>
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
		</section>

    </div>
);

export default Access;
