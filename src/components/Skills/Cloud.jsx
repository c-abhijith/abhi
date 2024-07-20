import React from 'react'

export const Cloud = () => {
  return (
    <div className="skills__content">
        {/* <h3 className="skills__group" id="skill_group">Backend</h3> */}
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <img className='icon-skills' src={`${process.env.PUBLIC_URL}/assets/numpy.png `} />
                    <div>
                        <h3 className="skills__name">Numpy</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                <img className='icon-skills' src={`${process.env.PUBLIC_URL}/assets/pandas.png`}  />
                    <div>
                        <h3 className="skills__name">Pandas</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                {/* <img className='icon-skills' src={`${process.env.PUBLIC_URL}/assets/mysql.png' /> */}
                    <div>
                        {/* <h3 className="skills__name">MySql</h3> */}
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                <img className='icon-skills' src={`${process.env.PUBLIC_URL}/assets/java.png`}  />
                    <div>
                        <h3 className="skills__name">Java</h3>
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                {/* <img className='icon-skills' src={`${process.env.PUBLIC_URL}/assets/github.png /> */}
                    <div>
                        {/* <h3 className="skills__name">GitHub</h3> */}
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>

                <div className="skills__data">
                {/* <img className='icon-skills' src={`${process.env.PUBLIC_URL}/assets/gitlab.png' /> */}
                    <div>
                        {/* <h3 className="skills__name">GitLab</h3> */}
                        {/* <span className="skills__level">sdfasdfasdfasd</span> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
