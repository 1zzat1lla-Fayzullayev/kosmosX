/* eslint-disable no-unused-vars */
import React from "react";

function SuccessStories() {
    return (
        <>
            <div className="success-container container">
                <h1 className="success-title">Başarı Hikayeleri</h1>
                <p className="success-description">
                    Daha önce Kosmosx aracılığıyla uzay kampına katılan öğrencilerin deneyimlerine dayanan başarı hikayeleri ve görseller.
                </p>

                <h2 className="success-examples-title">Örnekler</h2>
                <p className="success-examples-description">
                    Öğrencilerin kamp sonrası bilim ve teknoloji alanında nasıl ilerlediğine dair örnekler.
                </p>

                <h2 className="success-feedback-title">Geri Bildirimler</h2>
                <p className="success-feedback-description">
                    Velilerin ve öğrencilerin geri bildirimlerinden alıntılar:
                </p>
                <blockquote className="feedback-quote">“Kamp, çocuğuma ilham verdi!” - Bir Veli</blockquote>
                <blockquote className="feedback-quote">“Bilim ve teknolojiye olan ilgim arttı.” - Eski Öğrenci</blockquote>
            </div>
        </>
    );
}

export default SuccessStories;
