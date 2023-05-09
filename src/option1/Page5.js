import plan from "../asset/img/cuisine_thibodeau_page2_top_left.png";
import ciramique1 from "../asset/img/cuisine_thibodeau_page2_bot_left.png";
import ciramique2 from "../asset/img/cuisine_thibodeau_page2_top_left_right.png";
import ciramique3 from "../asset/img/cuisine_thibodeau_page2_top_left_right_bot.png";
import table_a_manger from "../asset/img/cuisine_thibodeau_page2_top_right.png";
import ilot_cuisine from "../asset/img/cuisine_thibodeau_page2_bot_right.png";

function Page5() {
    return (
        <div className="page5-box">
            <div className="plan-cuisine flex flex-row">
                <div className="flex  flex-col w-1/2 items-center justify-center">
                    <div className="w-2/3 mb-14">
                        <img src={plan} alt="Plan Cuisine Thibodeau" />
                        <h4 className="text-xl pt-6 uppercase font-thin">Plan d'aménagement</h4>
                    </div>
                    <div className="ciramique justify-center items-center w-2/3 flex flex-row">
                        <img className="w-1/2 mr-4" src={ciramique1} alt=" Ciramique Plancher" />
                        <div className="justify-center items-center w-1/2 flex flex-col">
                            <img className="ciramique-mur mb-4" src={ciramique2} alt="Ciramique Mur Cuisine" />
                            <img className="h-" src={ciramique3} alt="Ciramique Mur" />
                        </div>
                    </div>
                </div>
                <div className="img-cuisine w-1/2 flex flex-col items-center">
                    <img className="w-2/3  pl-14 mb-10 w-auto" src={table_a_manger} alt="" />
                    <img className="w-2/3 pl-14 w-auto" src={ilot_cuisine} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Page5;