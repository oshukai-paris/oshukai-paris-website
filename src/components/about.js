import React from 'react';
import chinenKarate from '../images/chinen-karate.jpg';
import chinenKobudo from '../images/chinen-kobudo.jpg';
import oshukaiTeam from '../images/oshukai-team.jpg';
import './style.scss';

const About = () => (
	<div>
        <section className="section is-small">

            <div className="container content">
                <p className="title">A Propos</p>

                <h3>l'Ecole Oshukai</h3>
                <div className="columns">
                    <div className="column is-half">
                        <p>
                            Oshukaï est le nom de l’école de Maître Kenyu CHINEN.
                            Oshukaï signifie : Ecole des techniques originelles.
                        </p>

                        <p>
                            Oshukai France est l’association regroupant tous les pratiquants
                            de KARATEDO SHORIN-RYU et de KOBUDO d’OKINAWA qui suivent
                            l’enseignement traditionnel dispensé par Maître Kenyu CHINEN.

                            L’association Oshukaï France regroupe plus de 50 clubs français
                            et organise des stages et des compétitions de Karaté traditionnel
                            et de Kobudo d’Okinawa en France et à l’étranger.
                        </p>
                    </div>

                    <div className="column">
                        <figure className="image">
							<img src={oshukaiTeam}/>
						</figure>
                    </div>
                </div>

                <h3>Maitre Kenyu Chinen</h3>
                <div className="columns">
                    <div className="column is-half">
                        <p>
                            Maître Kenyu CHINEN est né en 1944 sur l’île de IE à Okinawa.
                            Il a commencé à apprendre le Kobudo en 1963 sous la férule du Maître
                            Shinpo MATAYOSHI 10e Dan et le KaratéDo Shorin-Ryu avec Maître
                            Katsuya MIYAHIRA 10e Dan.
                        </p>

                        <p>
                            En 1976, Maître Kenyu CHINEN décide de quitter le Japon pour
                            transmettre en Europe les enseignements traditionnels
                            qu’il a reçus de ces deux grands Maîtres et s’installe à Paris.
                        </p>

                        <p>
                            Il dispense son enseignement à travers toute l’Europe, le Canada,
                            l’Argentine, l’Inde et Okinawa
                        </p>
                    </div>

                    <div className="column">
                        <figure className="image">
							<img src={chinenKarate}/>
						</figure>
                    </div>

                    <div className="column">
                        <figure className="image">
							<img src={chinenKobudo}/>
						</figure>
                    </div>

                </div>
            </div>
        </section>
    </div>
);

export default About;
