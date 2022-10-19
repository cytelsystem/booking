package digital.booking.interfaces;

import digital.booking.exceptions.NotFoundException;

import java.util.List;

public interface IService<T> {
    List<T> searchAll();
    T searchById(Long id) throws NotFoundException;
    T save(T entity);
    T update(T entity);
    Boolean delete(Long id);
}