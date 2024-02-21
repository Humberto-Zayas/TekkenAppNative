import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage, setCurrentPage }) => {
  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity onPress={handlePreviousPage} disabled={currentPage === 1}>
        <Text style={styles.paginationText}>{'<'}</Text>
      </TouchableOpacity>

      {Array.from(Array(totalPages).keys()).map((pageNumber) => (
        <TouchableOpacity
          key={pageNumber}
          onPress={() => setCurrentPage(pageNumber + 1)}
          disabled={currentPage === pageNumber + 1}
          style={[styles.pageNumberButton, currentPage === pageNumber + 1 && styles.currentPageNumber]}
        >
          <Text style={styles.paginationText}>{pageNumber + 1}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={handleNextPage} disabled={currentPage === totalPages}>
        <Text style={styles.paginationText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
