export default {
  state: {
    shopList: [
      { 
        id: 1, 
        title: 'Nike Air Max Plus III', 
        img: require('@/assets/img/1.png') ,
        descr:`
        Der Nike Air Max Plus III kombiniert die besonders bequeme Tuned Air-Technologie mit einer energiegeladenen Silhouette, für die schon die Vorgängermodelle berühmt waren. Er aktualisiert den Look mit plastischen Akzenten, die mit dem Obermaterial verbunden sind`
      },
      { 
        id: 2, 
        title: 'Nike Air Max Plus', 
        img: require('@/assets/img/4.png') ,

        descr:`
        Der stylishe Nike Air Max Plus sorgt mit Tuned Air für erstklassige Stabilität und unvergleichliche Dämpfung. Er besticht mit geschwungenen Designlinien des OG und einer aktualisierten digitalen Grafik. er feiert den trotzigen Style.`
      },
      { 
        id: 3, 
        title: 'Nike Air Max 2090', 
        img: require('@/assets/img/7.png') ,

        descr:`
        Mit dem Nike Air Max 2090 bringst du die Vergangenheit in die Zukunft. Dieser Schuh wurde vom legendären Air Max 90 inspiriert und besticht durch eine Max Air-Dämpfung, die unvergleichlichen Tragekomfort gewährleistet. Der Print im Digital-Style auf dem Obermaterial und zeitlose Original-Elemente des Klassikers sorgen für einen markanten, modernisierten Look.`
      },
      { 
        id: 4, 
        title: 'Nike Air Max 3', 
        img: require('@/assets/img/10.png') ,
        descr:`
        Keiner ist so modisch, keiner so bequem, keiner so bewährt. Der Nike Air Max 3 bleibt seinen Wurzeln treu und ehrt den legendären Air Max 90 mit der Waffelsohle, genähten Überzügen und klassischen TPU-Akzenten. Frische Farben verleihen dir einen modernen Look und die Max Air-Dämpfung sorgt für Tragekomfort.`

      },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList
    }
  },
}