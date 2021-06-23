token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwY2NmNWY4ZDk3Y2E1MzcwYzY3MDMyYyIsIm5hbWUiOiJhZG1pbiBhZG1pbiIsImlhdCI6MTYyNDEyOTIzM30.YzmUhoa2AXXQmTFRzGcO1pnKzLPBZVsl41LurpJe4SE

http://localhost:4000/

Auth-module
ng g m auth --routing
ng g c auth/signup --skip-tests
ng g c auth/signin --skip-tests
ng g s auth/auth --skip-tests

category-module
ng g m category --routing
ng g c category/category-list --skip-tests
ng g c category/category-add --skip-tests
ng g s category/category --skip-tests

product-module
ng g m product --routing
ng g c product/product-list --skip-tests
ng g c product/product-add --skip-tests
ng g s product/product --skip-tests

user-module
ng g m user --routing
ng g c user/user-list --skip-tests
ng g s user/user --skip-tests

ng g c home --skip-tests

ng add @ng-bootstrap/ng-bootstrap => sliding

**day 11 ecom**
*00:00:00* 
user cant go directly home page

*00:14:00*
ng g c product/upload-image --skip-tests

