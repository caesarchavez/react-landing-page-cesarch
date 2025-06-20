import React from 'react'

const cards = () => {
    return (
        <div className="container-fluid d-flex justify-content-center flex-row align-items-start">
            <div className="card ms-3" style={{ width: '18rem' }}>
                <img src="..." class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quam quis sapien consequat consectetur.
                        Mauris et eros et risus molestie suscipit. Proin sed pulvinar libero.</p>
                    <a href="#" className="btn btn-primary">Go</a>
                </div>
            </div>

            <div className="card ms-3" style={{ width: '18rem' }}>
                <img src="..." class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quam quis sapien consequat consectetur.
                        Mauris et eros et risus molestie suscipit. Proin sed pulvinar libero.</p>
                    <a href="#" className="btn btn-primary">Go</a>
                </div>
            </div>

            <div className="card ms-3" style={{ width: '18rem' }}>
                <img src="..." class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card 3</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quam quis sapien consequat consectetur.
                        Mauris et eros et risus molestie suscipit. Proin sed pulvinar libero.</p>
                    <a href="#" className="btn btn-primary">Go</a>
                </div>
            </div>
            <div className="card ms-3" style={{ width: '18rem' }}>
                <img src="..." class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card 4</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget quam quis sapien consequat consectetur.
                        Mauris et eros et risus molestie suscipit. Proin sed pulvinar libero.</p>
                    <a href="#" className="btn btn-primary">Go</a>
                </div>
            </div>
        </div>
    )
};

export default cards; 