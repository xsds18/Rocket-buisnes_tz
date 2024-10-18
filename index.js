document.addEventListener('DOMContentLoaded', function () {
    const productGrid = document.querySelector('.product-grid');
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    const products = document.querySelectorAll('.product');

    function updateActiveDot() {
        const gridRect = productGrid.getBoundingClientRect();
        let activeIndex = -1;

        products.forEach((product, index) => {
            const productRect = product.getBoundingClientRect();
            const productCenter = productRect.left + (productRect.width / 2);

            // Проверяем, находится ли центральная точка карточки в области видимости
            if (productCenter >= gridRect.left && productCenter <= gridRect.right) {
                activeIndex = index; // Устанавливаем индекс текущей активной карточки
            }
        });

        // Убедимся, что активный индекс не равен -1
        if (activeIndex !== -1) {
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    }

    // Следим за скроллом карточек
    productGrid.addEventListener('scroll', updateActiveDot);

    // Обновляем активную точку при загрузке
    updateActiveDot();
});
