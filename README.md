# E-Commerce

Node js ile yazılmış hazır backend kullanarak React.js ile geliştirmiş olduğum e ticaret sitesi.

## Projede kullanılan teknolojiler
- Formik (Form yönetimini sağlamak için)
- React Router
- React Query
- Context Api
- JWT
- Chakra-UI
- Ant Design
- Axios
- Yup (validasyon işlemleri için)

## Ana Sayfa


- Ana sayfa bizleri şu şekilde karşılamaktadır; 


![akaekran](https://user-images.githubusercontent.com/98388628/173832347-a5839341-8f38-470b-bcf2-4556179d006b.png)
Burada 12 adet ürün listelenmektedir.
Sayfanının altında yer alan "Load More" butonuna tıkladığımızda diğer 12 ürün listelenmektedir.   
![image](https://user-images.githubusercontent.com/98388628/173833700-56ca2932-8785-4c1b-93a0-d6ab3907eea2.png)


- Ürünlerin detay bilgilerine ürün kartlarına tıklayarak ulaşılabilir.
![image](https://user-images.githubusercontent.com/98388628/173835031-c89d6019-f0d4-43ee-aa31-8f95e82fef97.png)


- Navbar üzerinde bulunan Register butonu ile Sign Up ekranına yönlendirlir.
![image](https://user-images.githubusercontent.com/98388628/173835765-ef655fe7-17cc-4319-8db4-dd6d2ad100b3.png)
Kullanıcı burada email ve parola girerek unique bir id ile veri tabanına kayıt edilir.


- Login butonu ile Sign In ekranına yönlendirilir.
![image](https://user-images.githubusercontent.com/98388628/173837054-c576e054-638d-4859-8b63-8dff98442f70.png)
Burada kullanıcı daha önceden veri tabanına kayıt olduğu email ve parolasıyla giriş işlemini gerçekleştirir.


- Giriş yapmış kullanıcı sepetine eklemek istediği ürünleri "Add to basket" butonu ile sepetine ekleyebilir. "Remove from basket" butonu ile sepetinden çıkarabilir. Sepetinde kaç ürün olduğu bilgisi navbar üzerinde yer alan Basket butonun yanında gösterilir.
![image](https://user-images.githubusercontent.com/98388628/173838534-251d9929-fbdf-48d3-b564-4d29fed17f00.png)

- Kullanıcı navbar üzerinde yer alan Basket butonu ile sepet sayfasına yönlendirilir. Burada sepetine eklediği ürün bilgilerini görüntüler. 
![image](https://user-images.githubusercontent.com/98388628/173841027-fd70c663-f36f-46dd-807f-84d4d46bea74.png)


- Order butonuna tıkladığında alışverişin tamamlanması için gerekli olan Adres bilgisinin girilmesi istenir(Backend üzerinde sadece adres bilgisi istenildiği için).
![image](https://user-images.githubusercontent.com/98388628/173841252-118cf91c-3775-4758-a04c-74161d202cbb.png)
Save butona tıklanıldığında alışveriş işlemi tamamlanmış olur.


- Kullanıcı bilgilerini Navbar üzerinde bulunan Profile butonuna tıklanarak görüntülenebilir. Aynı zamanda burda bulunan Logout butonu ile çıkış işlemi gerçekleştirlir.
![image](https://user-images.githubusercontent.com/98388628/173842361-f3ec42c0-f0a6-4ea2-b364-da3f30077b5e.png)


-Sign In ekranı ile veri tabanı üzerinde rolü admin olan kullanıcı giriş yaptığında Navbar üzerinde Admin tarafından yönetilmesi gereken işlemlere yönlendirilmesi için Admin butonu yer almaktadır.
![image](https://user-images.githubusercontent.com/98388628/173843324-fa2db37e-1537-4e5b-9c89-d3e05f17b598.png)


## Admin Ekranı
- Admin ekranında Ana Sayfa, Siparişleri yönetebileceği Order Kısmı, Ürünler ekleyip ve ürün bilgilerini güncelleyebileceği Products kısmı bulunuyor
![image](https://user-images.githubusercontent.com/98388628/173843570-4da41950-19ec-40c1-9e1b-32944a7bceba.png)


- Orders altında kullanıcıların vermiş oldukları siparişler görüntülenir.
![image](https://user-images.githubusercontent.com/98388628/173844379-70819928-13f5-4794-ae4d-beb1da2165d6.png)


- Products altında ise var olan ürün bilgileri listeleniyor delete butonu ile ürünü silme edit butonu ile de ürün bilgilerini güncelleneceği ekrana yönlendirilir.
![image](https://user-images.githubusercontent.com/98388628/173845214-6c957988-578f-4ac3-b406-dcade9281392.png)


- Edit ekranı;
![image](https://user-images.githubusercontent.com/98388628/173845780-64e87ee7-85f4-486b-aa5c-43e6ce2c4f7e.png)


- Yeni bir ürün eklemek içinse Product altında bulunan New butonuna tıklanılır.
![image](https://user-images.githubusercontent.com/98388628/173846310-a5309f79-2efc-4616-a227-5db4141eadf8.png)

