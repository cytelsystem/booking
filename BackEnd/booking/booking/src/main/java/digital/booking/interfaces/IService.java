package digital.booking.interfaces;

import digital.booking.exceptions.BadRequestException;
import digital.booking.exceptions.NotFoundException;

import java.util.List;

public interface IService<T> {
    List<T> searchAllCategories();
    T searchCategoryById(Long id) throws NotFoundException;
    void createCategory(T entity);
    void updateCategory(T entity) throws BadRequestException;
    void deleteCategory(Long id) throws NotFoundException;
}