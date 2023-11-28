/* ----------------01----------------- */

<View style={{ paddingRight: 15 }}>
    <Shadow
        startColor={COLORS.shadowStartColor}
        finalColor={COLORS.shadowFinalColor}
    >
        <TouchableOpacity
            style={{
                width: 155,
                marginHorizontal: 7.5,
                // marginLeft:
                //     index === 0 ? 0 : 7.5,
                borderRadius: 10,
                padding: 10,
                paddingBottom: 16,
                alignItems: "center",
            }}
            onPress={() =>
                navigation.navigate("FoodDetails", {
                    dish: item,
                    dishes: dishes,
                })
            }
        >
            <Image
                source={item.presentationImage}
                style={{
                    width: 85,
                    height: 85,
                    borderRadius: 50,
                    marginBottom: 10,
                }}
            />
            <TouchableOpacity
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    padding: 10,
                }}
            >
                <Heart fillColor={COLORS.red} strokeColor={COLORS.red} />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    padding: 10,
                }}
                onPress={() => {
                    showMessage({
                        message: "Success",
                        description: `${item.name} was added.`,
                        type: "success",
                    });
                }}
            >
                <Add />
            </TouchableOpacity>
            <Text
                style={{
                    textAlign: "center",
                    marginBottom: 8,
                    ...FONTS.Roboto_500Medium,
                    fontSize: 16,
                    textTransform: "capitalize",
                }}
                numberOfLines={1}
            >
                {item.name}
            </Text>
            <Text
                style={{
                    marginBottom: 7,
                    color: COLORS.gray2,
                }}
                numberOfLines={1}
            >
                {item.compound}
            </Text>
            <Text
                style={{
                    marginBottom: 11,
                    ...FONTS.Roboto_500Medium,
                    fontSize: 16,
                    color: COLORS.carrot,
                }}
            >
                ${item.price}
            </Text>
            <TouchableOpacity
                style={{
                    width: 128,
                    height: 32,
                    backgroundColor: COLORS.lightGreen,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "capitalize",
                }}
                onPress={() => {
                    showMessage({
                        message: "Success",
                        description: `${item.name} was added.`,
                        type: "success",
                    });
                }}
            >
                <Text
                    style={{
                        color: COLORS.green,
                        ...FONTS.Roboto_500Medium,
                        fontSize: 12,
                    }}
                >
                    Add to Cart
                </Text>
            </TouchableOpacity>
        </TouchableOpacity>
    </Shadow>
</View>;

/* --- */

<Shadow
    viewStyle={{ marginRight: 15 }}
    startColor={COLORS.shadowStartColor}
    finalColor={COLORS.shadowFinalColor}
>
    <TouchableOpacity
        style={{
            width: 250,
            borderRadius: 10,
        }}
    >
        <Image
            source={item.presentationImage}
            style={{
                height: 144,
                width: "100%",
                borderRadius: 10,
            }}
        />
        <View
            style={{
                paddingHorizontal: 19,
                paddingTop: 12,
                paddingBottom: 15,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 3,
                }}
            >
                <Text
                    style={{
                        ...FONTS.Roboto_700Bold,
                        fontSize: 16,
                        textTransform: "capitalize",
                        lineHeight: 16 * 1.2,
                    }}
                    numberOfLines={1}
                >
                    {item.name}
                </Text>
                <Text>{item.price}</Text>
            </View>
            <Text
                style={{
                    marginBottom: 15,
                    color: COLORS.gray2,
                }}
                numberOfLines={1}
            >
                {item.compound}
            </Text>
            <TouchableOpacity
                style={{
                    height: 32,
                    width: "100%",
                    backgroundColor: COLORS.lightGreen,
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "capitalize",
                    borderRadius: 5,
                }}
                onPress={() => {
                    showMessage({
                        message: "Success",
                        description: `${item.name} was added.`,
                        type: "success",
                    });
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.Roboto_500Medium,
                        fontSize: 12,
                        color: COLORS.green,
                        textTransform: "capitalize",
                    }}
                >
                    Add to Cart
                </Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
</Shadow>;
