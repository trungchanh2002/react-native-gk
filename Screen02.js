import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

const products = [
  {
    id: 0,
    category: "Smart Phone",
    name: "Smart Phone 0",
    image: require("./assets/smartphone.png"),
    status: "sale",
  },
  {
    id: 1,
    category: "Smart Phone",
    name: "Smart Phone 1",
    image: require("./assets/smartphone.png"),
    status: "sale",
  },
  {
    id: 2,
    category: "Smart Phone",
    name: "Smart Phone 2",
    image: require("./assets/smartphone.png"),
    status: "sale",
  },
  {
    id: 3,
    category: "Smart Phone",
    name: "Smart Phone 3",
    image: require("./assets/smartphone.png"),
    status: "sale",
  },
  {
    id: 4,
    category: "Smart Phone",
    name: "Smart Phone 4",
    image: require("./assets/smartphone.png"),
    status: "sale",
  },
  {
    id: 5,
    category: "Smart Phone",
    name: "Smart Phone 5",
    image: require("./assets/smartphone.png"),
    status: "not sale",
  },
  {
    id: 6,
    category: "iPad",
    name: "iPad 1",
    image: require("./assets/ipad.png"),
    status: "sale",
  },
  {
    id: 7,
    category: "iPad",
    name: "iPad 2",
    image: require("./assets/ipad.png"),
    status: "sale",
  },
  {
    id: 8,
    category: "iPad",
    name: "iPad 3",
    image: require("./assets/ipad.png"),
    status: "sale",
  },
  {
    id: 9,
    category: "iPad",
    name: "iPad 4",
    image: require("./assets/ipad.png"),
    status: "not sale",
  },
  {
    id: 10,
    category: "iPad",
    name: "iPad 5",
    image: require("./assets/ipad.png"),
    status: "not sale",
  },
  {
    id: 11,
    category: "MacBook",
    name: "MacBook",
    image: require("./assets/mac.png"),
    status: "sale",
  },
  {
    id: 12,
    category: "MacBook",
    name: "MacBook",
    image: require("./assets/mac.png"),
    status: "not sale",
  },
  {
    id: 13,
    category: "MacBook",
    name: "MacBook",
    image: require("./assets/mac.png"),
    status: "not sale",
  },
  {
    id: 14,
    category: "MacBook",
    name: "MacBook",
    image: require("./assets/mac.png"),
    status: "sale 50%",
  },
  {
    id: 15,
    category: "MacBook",
    name: "MacBook",
    image: require("./assets/mac.png"),
    status: "sale 50%",
  },
];

function Screen02({ navigation }) {
  // Sử dụng useState để lưu trạng thái danh mục và trạng thái đã chọn
  const [selectedCategory, setSelectedCategory] = useState("Smart Phone");
  const [selectedStatus, setSelectedStatus] = useState("sale");
  const [filteredProducts, setFilteredProducts] = useState([]);

  //Khi chuyển trang hiển thị mặc định của Smart Phone
  useEffect(() => {
    handleCategoryChange("Smart Phone");
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Lọc sản phẩm dựa trên danh mục đã chọn và trạng thái "sale" mặc định
    const filteredProducts = products.filter(
      (product) => product.category === category && product.status === "sale"
    );
    setFilteredProducts(filteredProducts.slice(0, 4)); // Hiển thị 4 sản phẩm đầu tiên
  };

  // Hàm xử lý khi người dùng lọc sản phẩm theo trạng thái
  const handleFilterByStatus = (status) => {
    setSelectedStatus(status);
    // Lọc sản phẩm dựa trên danh mục và trạng thái đã chọn
    const filteredProducts = products.filter(
      (product) =>
        product.category === selectedCategory && product.status === status
    );
    setFilteredProducts(filteredProducts.slice(0, 4));
  };

  // Hàm xử lý khi người dùng nhấn vào nút "See All"
  const handleSeeAll = () => {
    // Lọc tất cả sản phẩm dựa trên danh mục và trạng thái đã chọn
    const filteredProducts = products.filter(
      (product) =>
        product.category === selectedCategory &&
        product.status === selectedStatus
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Image
          source={require("./assets/kinhlup.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <TextInput placeholder="Tìm kiếm" />
      </View>
      <Text>Categories</Text>
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => handleCategoryChange("Smart Phone")}>
          <Image
            source={require("./assets/smartphone.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryChange("iPad")}>
          <Image source={require("./assets/ipad.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategoryChange("MacBook")}>
          <Image source={require("./assets/mac.png")} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.statusButtons}>
        <TouchableOpacity onPress={() => handleFilterByStatus("sale")}>
          <Text style={styles.textLoc}>Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterByStatus("not sale")}>
          <Text style={styles.textLoc}>Not Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFilterByStatus("sale 50%")}>
          <Text style={styles.textLoc}>Sale 50%</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listproducts}>
            <Image source={item.image} style={styles.imageProduct} />
            <Text style={{ padding: 20 }}>{item.name}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={handleSeeAll}>
        <Text style={styles.seeAllButton}>See All</Text>
      </TouchableOpacity>
      <View style={styles.tool}>
        <Image source={require("./assets/home.png")} style={styles.icon1} />
        <Image source={require("./assets/home.png")} style={styles.icon1} />
        <Image source={require("./assets/home.png")} style={styles.icon1} />
        <Image source={require("./assets/home.png")} style={styles.icon1} />
        <Image source={require("./assets/home.png")} style={styles.icon1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "center",
  },
  search: {
    width: "90%",
    height: 30,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    paddingLeft: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 7,
    marginTop: 10,
    borderRadius: 5,
  },
  listproducts: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  statusButtons: {
    flexDirection: "row",
  },
  textLoc: {
    width: 80,
    height: 25,
    marginTop: 10,
    marginRight: 5,
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 10,
  },
  imageProduct: {
    width: 100,
    height: 60,
  },
  tool: {
    width: "100%",
    height: 50,
    backgroundColor: "#3A9BFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon1: {
    width: 42,
    height: 42,
    marginRight: 20,
  },
});

export default Screen02;
