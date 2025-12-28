import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const photos = [
  "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/603067751_1613334166770771_1550769443784494920_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2JLgBnjdZwsQ7kNvwEtjYcV&_nc_oc=Adn_IXiCJ3GI-0dWfIAz9HQPTeoHE0LB3M9r1l3yTSJ2qSkpJm_JsdXYI7mz_frN-vdYvBOJAFaWqqVFMg6G9Hvk&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=pBJfV96UlQcCIC8Fdm_Q6g&oh=00_Afmm1ExCY8db8V6NF-gy0ZKjRmsoF2U9_tJ2PpZi2CU3Ow&oe=69539D93",
  "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/603781843_1237641898472320_1696561627748106610_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=YmRcmnMTNb0Q7kNvwFjwAWK&_nc_oc=Admro7XclCMVn4MfF2hVHXtH5UnIHTAdk2mb7qmke8gK19lEQw3qOVQiTQMxHUXfhxXJJjujNquL9ADhW7Xg8k_K&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=wnaiTjZ0NBbee5oy5Acnmg&oh=00_AfncCL-d2iG3PdDGF0jsT39gdH-HsoElRuHlEzyLc1CsUA&oe=6953A814",
  "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/600478146_122260522028158248_9140067098163754744_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vtAlqFK81BcQ7kNvwENS_VG&_nc_oc=AdlKITGsgq04bR-zBlYCbVuK7abmQOa1zvWHvSS4H6e0ropBIp2G5db9nv5Gx9QiZjEpmeINW0XeUQAQ90-mZPjo&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=Lr6fRvjczB5DPXC37zFjyw&oh=00_AfmcclbwlDG6IZPb03QZlkixwJG9Pk_Hia1nmhAcURdAdA&oe=695381E1",
  "https://scontent-cdg4-1.xx.fbcdn.net/v/t39.30808-6/603705820_2010977959684838_308271568003812344_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_qfGQNlcxPMQ7kNvwEZ4o-g&_nc_oc=Adk_4heUeb4g7OT-bGVWCVSXchJUpN4gL9KVPRprUOErOKgzorR1f0R4f_kDQwTYrTS7frBcnmETmQc3sy8DSGLN&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=dJMWGZO9iFjdX_ZcLFLs8Q&oh=00_Afnw-XOWIx4ikVnmFZ-n82NdmiR69HIChHY_bOsSirkLsQ&oe=69538330",
  "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/605527389_122162861294827734_1450779523697015659_n.jpg?stp=dst-jpg_p552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8Lx9wPjI9goQ7kNvwEK0v3w&_nc_oc=AdloXJhQ2gDSgRnYrtPKGR5RSWBiWa-HqBvD06o_ok9W3o_Wd0WH0_sk9eit6LW6uUk&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=-PnK29VlXZ32kd4GuObI4Q&oh=00_AfnpCbSuaHav5kxoFjU6zW1TvtMmY5AOzyFMQKmPH4tx9A&oe=6952FE43",
  "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/606810685_1667183628025196_5248844118541208942_n.jpg?_nc_cat=111&_nc_cb=99be929b-ad57045b&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHb_nmEDPT-b0zok6C53sVDCOHsb8ogxUgI4exvyiDFSDmItqFsrFgMape3kJp-ARuURkqOA1KvmKJlRCWWPHPZ&_nc_ohc=bLPBoNElRvsQ7kNvwGIi9zK&_nc_oc=AdnGtx-8qEznwP4bIxgCZJKfvvU057G9Rq2u3ab-4sLSVzx5kFUfLGDp2ydA005ORi0&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=2HbJuhNmYZwvcA1FaX2ttw&oh=00_AfkUb1JFcPrCm1NHNoiRCZ9Vt7Q3976tKBs5enu6DQ1rGA&oe=6952C9B0",
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/603775908_122163094076827734_2005658364496386064_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AjcrkHVZ5FsQ7kNvwG36lOo&_nc_oc=AdnJQBT4QqOBXOBu6FboK0QK72OygA0g4a6vSQgBSSBWmaG97_Yltlm9k5W99QsDrgM&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=T4euYyRFX0GLdzGuLrNB4A&oh=00_AfnJOyjtAKgJSAU-Re0elfV59SEvSyvmqqhbym3UIBvOpw&oe=69546CE1",
  "https://scontent.fdac198-1.fna.fbcdn.net/v/t39.30808-6/604790965_122163012956827734_5848387888385364447_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZiBuYJeuqiMQ7kNvwH3VegD&_nc_oc=AdkwrOkOJ_ZtZweKHa5mKcs3r5-SjnkYY4q-U_X53naioJDAo3sPihhfynHQJnUUEQE&_nc_zt=23&_nc_ht=scontent.fdac198-1.fna&_nc_gid=-vuZdpG_fjc8_O7RdiOkkA&oh=00_AfkFsvSk1rcUSNxDmwUB8qkB38I2FwFGN6rqPdyOqsneyg&oe=6953D70B",
  "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/605284429_122173371794477538_306340469652833258_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EYGt5xEIYDUQ7kNvwFlK9FA&_nc_oc=AdmvET1hJZPNLvRTiTe8bAKY75XXPqRRiwo7PoazuQiLoRsCSwDel22qbbal-fwse9rxaW_pDt_Te3v9dPfVzeQf&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=ZythXq2aZw04RhHXL9LiNA&oh=00_Aflw4InitRsQ4qoh6ba11eo4Mw1odAIfjZP7P-g56wxM2Q&oe=695386DC",
];

const Photos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">ফটো গ্যালারি</h1>
              <p className="text-xl text-muted-foreground">
                শহীদ ওসমান হাদির স্মৃতিতে সংরক্ষিত মুহূর্তসমূহ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Photos Grid */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square"
                >
                  <img
                    src={photo}
                    alt={`স্মৃতি ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Photos;
