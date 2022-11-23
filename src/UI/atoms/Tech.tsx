// technology icon
import {
    web_technology_icon,
    mobile_technology_icon,
  } from "../../constants/Icon";

import TitleName from "./TitleName";


const Tech = () => {
  return (
    <section className="tech_section">

             {/* Page Name title */}
          <TitleName subTitle="Technology widely" title="used" />
            <div className="d-flex justify-content-center align-items-center tech_container">
                
                    
                <div className="tech_test d-flex justify-content-center align-items-center">
                    
                    
                <div className="tech_test2 d-flex justify-content-center align-items-center">
               
                    
                    <div className="tech_test3 ">
                        <div className="tech_text">
                           <p> You Dream,</p>
                           <p> We Build!!!</p>
                        </div>
                    
                        <div className="icon_html">
                        <img title="HTML" src={web_technology_icon[0].html} alt="html icon" />
                        </div>
                        <div className="icon_css">
                        <img title="CSS" src={web_technology_icon[1].css} alt="css icon" />
                        </div>
                        <div className="icon_twail">
                        <img title="Twailwind CSS" src={web_technology_icon[2].twail} alt="twail icon" />
                        </div>
                        <div className="icon_bootstrap">
                        <img title="Bootstrap" src={web_technology_icon[3].bootstrap} alt="bootstrap icon" />
                        </div>

                        <div className="icon_github">
                        <img title="Github" src={web_technology_icon[4].github} alt="github icon" />
                        </div>
                <div className="icon_gitlab">
                        <img title="Gitlab" src={web_technology_icon[5].gitlab} alt="gitlab icon" />
                        </div>
                        <div className="icon_js">
                        <img title="Js" src={web_technology_icon[6].js} alt="Js icon" />
                        </div>

                <div className="icon_typescript">
                        <img title="Typescript" src={web_technology_icon[7].typescript} alt="typescript icon" />
                        </div>
                <div className="icon_react">
                        <img title="React" src={web_technology_icon[8].react} alt="react icon" />
                        </div>
                <div className="icon_nodejs">
                        <img title="Node js" src={web_technology_icon[9].nodejs} alt="nodejs icon" />
                        </div>
                <div className="icon_mysql">
                        <img title="Mysql" src={web_technology_icon[10].mysql} alt="mysql icon" />
                        </div>
                <div className="icon_mongo">
                        <img title="Mongo DB" src={web_technology_icon[11].mongo} alt="mongo icon" />
                        </div>
                <div className="icon_postgre">
                        <img title="Postgre" src={web_technology_icon[12].postgre} alt="postgre icon" />
                        </div>
                <div className="icon_typeorm">
                        <img title="Typeorm" src={web_technology_icon[13].typeorm} alt="typeorm icon" />
                        </div>
                <div className="icon_npm">
                        <img title="NPM" src={web_technology_icon[14].npm} alt="npm icon" />
                        </div>
                <div className="icon_docker">
                        <img title="Docker" src={web_technology_icon[15].docker} alt="docker icon" />
                        </div>
                <div className="icon_kubernets">
                        <img title="Kubernets" src={web_technology_icon[16].kubernets} alt="kubernets icon" />
                        </div>
                <div className="icon_aws">
                        <img title="AWS" src={web_technology_icon[17].aws} alt="aws icon" />
                        </div>
                <div className="icon_vscode">
                        <img title="VScode" src={web_technology_icon[18].vscode} alt="vscode icon" />
                        </div>
                <div className="icon_wordpress">
                        <img title="Wordpress" src={web_technology_icon[19].wordpress} alt="wordpress icon" />
                        </div>
                <div className="icon_firebase">
                        <img title="Firebase" src={web_technology_icon[20].firebase} alt="firebase icon" />
                        </div>
                <div className="icon_figma">
                        <img title="Figma" src={web_technology_icon[21].figma} alt="figma icon" />
                        </div>
                <div className="icon_illustrator">
                        <img title="Illustrator" src={web_technology_icon[22].illustrator} alt="illustrator icon" />
                        </div>
                <div className="icon_indesign">
                        <img title="Indesign" src={web_technology_icon[23].indesign} alt="indesign icon" />
                        </div>
                <div className="icon_photoshop">
                        <img title="Photoshop" src={web_technology_icon[24].photoshop} alt="photoshop icon" />
                        </div>
                <div className="icon_c">
                        <img title="C" src={web_technology_icon[25].c} alt="c icon" />
                        </div>
                <div className="icon_cPlus">
                        <img title="C++" src={web_technology_icon[26].cPlus} alt="cPlus icon" />
                        </div>
                <div className="icon_go">
                        <img title="Go" src={web_technology_icon[27].go} alt="go icon" />
                        </div>
                <div className="icon_java">
                        <img title="Java" src={web_technology_icon[28].java} alt="java icon" />
                        </div>
                <div className="icon_laravel">
                        <img title="Laravel" src={web_technology_icon[29].laravel} alt="laravel icon" />
                        </div>

                <div className="icon_dart">
                        <img title="Dart" src={mobile_technology_icon[0].dart} alt="dart icon" />
                        </div>
                <div className="icon_flutter">
                        <img title="Flutter" src={mobile_technology_icon[1].flutter} alt="flutter icon" />
                        </div>

                    </div>
                    </div>
                
                    
                </div>
        </div>

        </section>
  )
}

export default Tech;