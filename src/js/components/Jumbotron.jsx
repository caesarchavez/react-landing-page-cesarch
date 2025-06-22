import React from "react";

const jumbotron = () => {
    return (
        <div className="container py-4">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">A Warm Welcome To My First React Landing Page</h1>
                    <p className="col-md-8 fs-4">I'm in the process of becoming a web dev. In the cards below the Jumbotron you will find my favorite RPGs as of 2025</p>
                    <button className="btn btn-primary btn-lg" type="button">For Those Who Come After!</button>
                </div>
            </div>
        </div>
    )
};


export default jumbotron;