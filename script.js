
const handleCategory = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
  const data = await res.json();
  const array = data.data;
  const tabContainer = document.getElementById('tab-container');
  
  array.forEach((category) => {
   
    const div = document.createElement('div');
    div.innerHTML = `
    <a onclick = "handleLoadNews('${category.category_id}')" class="tab"> ${category.category}</a> 
    `;
    tabContainer.appendChild(div)
  }
  )
}
    const handleLoadNews = async (id) => {
      const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
      const data = await response.json();
      const idData = data.data;


      const cardContainer = document.getElementById('card-container');
      cardContainer.textContent = '';

      idData?.forEach((video) => {
        const div = document.createElement('div');
         div.innerHTML = `
        
         <div class="card card-compact  bg-gray-300 shadow-xl">
          <figure><img src="${video.thumbnail}" alt="thumbnail" /></figure>

       <div class="card-body">
          <div class="flex" >
               <div class="author">
                  <div>
                     <img class="w-14 rounded-full" src=${video.authors[0].profile_picture} />
                  </div>
               </div>
               <h2 class="card-title"> ${video.title}</h2>
          </div>
          <div class=" flex">
            <h6>${video.authors[0].profile_name}</h6>
            <small>${video.authors[0].verified? video.authors[0].verified : ''} </small>
            </div>
            <small>${video.others.views} views</small>

        </div>
              
       </div>
         
         `;
        cardContainer.appendChild(div);
      })
      
    }
handleCategory();
handleLoadNews(	"1000");