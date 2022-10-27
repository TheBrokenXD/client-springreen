const ProjectCard = ({ type, img, title, description }) => {
    return (
        <>
            {
                type === 'one' ? (
                    <div>
                        <div className="xl-display-f xs-display-n">
                            <div className="project-one row align-i-center">
                                <div className="col-9-xs">
                                    <div className="project-image">
                                        <img src={img} alt="image" />
                                    </div>
                                </div>
                                <div className="col-3-xs">
                                    <div className="project-content">
                                        <p className='font-xl custom-text'>{title}</p>
                                        <p className='custom-sub-text mt-2'>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl-display-n xs-display-f">
                            <div className="project-one row align-i-center">
                                <div className="col-12-xs">
                                    <img src={img} alt="image" />
                                </div>
                                <div className="col-12-xs">
                                    <div className="project-content mt-4 text-center">
                                        <p className='font-xl custom-text'>{title}</p>
                                        <p className='custom-sub-text mt-2'>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="xl-display-f xs-display-n">
                            <div className="project-two row align-i-center">
                                <div className="col-3-xs">
                                    <div className="project-content">
                                        <p className='font-xl custom-text'>{title}</p>
                                        <p className='custom-sub-text mt-2'>{description}</p>
                                    </div>
                                </div>
                                <div className="col-9-xs">
                                    <div className="project-image">
                                        <div className="display-f justify-end">
                                            <img src={img} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl-display-n xs-display-f">
                            <div className="project-two row align-i-center">
                                <div className="col-12-xs display-f justify-center">
                                    <img src={img} alt="image" />
                                </div>
                                <div className="col-12-xs">
                                    <div className="project-content mt-4 text-center">
                                        <p className='font-xl custom-text'>{title}</p>
                                        <p className='custom-sub-text mt-2'>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}
 
export default ProjectCard;