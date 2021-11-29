import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Skils.css'

const Skils = () => {
    const now = 90;
    const react =75;
    const mongodb =65;
    const express =50;
    const node =45;
    const html =95;

const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
const React = <ProgressBar now={react} label={`${react}%`} />;
const Mongodb = <ProgressBar now={mongodb} label={`${mongodb}%`} />;
const Express = <ProgressBar now={express} label={`${express}%`} />;
const Node = <ProgressBar now={node} label={`${node}%`} />;
const Html = <ProgressBar now={html} label={`${html}%`} />;


    return (
        <div>
             <div class="row">
                <div class="col-lg-6  col-sm-12">
                <div class="-3 ">
                    <small>javascript</small>
                    <p>{progressInstance}</p>

                    <small>Node js</small>
                    <p>{Node}</p>

                    <small>Html</small>
                    <p>{Html}</p>
                </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                <div class=" ">
                <small>mongodb</small>
                    <p>{Mongodb}</p>

                    <small>React js</small>
                    <p>{progressInstance}</p>

                    <small>Express js</small>
                    <p>{Express}</p>
                </div>
                </div>
            </div>
           
        </div>
    );
};

export default Skils;