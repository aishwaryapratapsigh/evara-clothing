import React from 'react';
import './Subscribe.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Subscribe = () => {
    return (
        <div className="sub-container py-5">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="sub-heading mb-4">
                        Subscribe to get updates on exciting offers <br /> &amp; deals
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8">
                        <div className="d-flex flex-column flex-sm-row justify-content-center">
                            <input
                                placeholder="Enter your email"
                                type="email"
                                className="sub-input"
                            />
                            <button className="btn sub-button mt-3 mt-sm-0 ">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Subscribe;
