// import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
// import { getText } from "../locales"

function SpaceWorkshops() {
    return (
        <>
            <div className="container spacecampprograms">
                <h1 className="program-title">Uzay ve Havacılık Atölyeleri Kurulumu</h1>
                <p className="program-description">
                    KosmosX, uzay ve havacılık konularına olan ilgiyi artırmak ve genç nesilleri bu alanlarda eğitmek amacıyla, eğitim kurumlarına özel uzay ve havacılık atölyeleri kurulum hizmeti sunmaktadır. Bu atölyeler, öğrencilerin teorik bilgilerini pratiğe dönüştürebilecekleri interaktif bir öğrenme ortamı sağlar.                </p>

                {/* <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    className="accerdionHeading"
                                >
                                    Atölyelerimizde Yer Alan İçerikler
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} mt={3} color={"#666666"}>
                           
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion> */}
                <h2 style={{fontSize: "19px"}}> Atölyelerimizde Yer Alan İçerikler</h2>
                <ul style={{marginTop: "20px"}}>
                    <li style={{ fontSize: "19px" }}><strong>Astronomi ve Gökyüzü Gözlemleri: </strong> Teleskop kullanımı, yıldız haritaları, gezegenler ve gök cisimleri hakkında uygulamalı bilgiler.</li>
                    <li style={{ fontSize: "19px" }}><strong> Roket Tasarımı ve Fırlatma Simülasyonları:</strong> Öğrenciler, kendi roketlerini tasarlayarak fizik ve mühendislik ilkelerini öğrenirler</li>
                    <li style={{ fontSize: "19px" }}><strong> Robotik ve Kodlama:</strong> Uzay teknolojilerinde kullanılan robotik sistemlerin temelleri ve programlanması.</li>
                    <li style={{ fontSize: "19px" }}><strong> Astronot Eğitimi Simülasyonları:</strong> Gerçek astronotların eğitim süreçlerinin simüle edildiği interaktif uygulamalar.</li>
                </ul>
                <p className="program-description" style={{ marginTop: "20px" }}>KosmosX’in sunduğu atölye kurulum hizmeti, eğitim kurumlarına veya bilim merkezlerine özel olarak uyarlanabilir. Kurulum aşamasında gerekli tüm teknik ekipman, eğitim materyalleri ve rehberlik hizmeti tarafımızdan sağlanır. Her yaş grubuna hitap eden atölyelerimiz, öğrencilerin bilimsel düşünme becerilerini geliştirirken aynı zamanda yaratıcılıklarını ve problem çözme yeteneklerini güçlendirmeyi hedefler.</p>
                <p className="program-description">KosmosX olarak, atölyelerin kurulumu sonrası öğretmenlere de eğitim desteği sunarak, sürdürülebilir ve kalıcı bir eğitim ortamı oluşturmayı taahhüt ediyoruz. Uzay ve havacılık bilimlerine yönelik bu yenilikçi yaklaşım, eğitim kurumlarını geleceğin teknoloji dünyasına hazırlamaya yardımcı olur.</p>
            </div>
        </>
    )
}

export default SpaceWorkshops