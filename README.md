# React-Native
## Day 3
### Xây dựng cấu trúc project với react-native
Vì React chỉ là một thư viện nên nó sẽ không có các ràng buộc trong việc sắp xếp và cấu trúc thư mục dự án của bạn. Điều hay của việc này là nó sẽ cho chúng ta được tự do tham khảo các phương pháp khác nhau và áp dụng chúng ngay lập tức khi thấy phù hợp. Tuy vậy, từ một góc nhìn khác thì nó cũng có thể gây ra sự "bối rối" cho những lập trình viên mới bắt đầu bước vào thế giới của React.
Trong bài viết này, tôi sẽ cho các bạn thấy những phương pháp mà tôi đã sử dụng trong một thời gian và có khả năng mở rộng khá là tốt. Những phương pháp này không phải là những thứ hoàn toàn mới mà chúng được tổng hợp và tinh chỉnh lại dựa trên những phương pháp đã được mọi người sử dụng.
Note: Không có phương pháp nào trong bài viết này là hoàn hảo cả. Bạn chỉ cần áp dụng những phương pháp mà bạn nghĩ rằng nó hợp lý và áp dụng nó một cách phù hợp với mình.
Cấu trúc thư mục
Một trong các thắc mắc mà tôi thường thấy mọi người gặp phải là về việc tổ chức cấu trúc files và thư mục như thế nào. Trong bài viết này, tôi sẽ coi như bạn có một cấu trúc tối giản nhất được tạo bằng create-react-app.
create-react-app sẽ tạo cho chúng ta một project cơ bản. Chứa trong thư mục gốc của nó là các file: .gitignore, package.json, README.md, yarn.lock
Nó cũng tạo ra các thư mục: public và src. Trong đó, thư mục src chính là nơi chứa source code của chúng ta.
