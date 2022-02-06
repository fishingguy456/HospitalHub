import copy

def dist(p1, p2):
    return ((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)**(1/2)


#maxC = []

def buildGrid():
    xMin = 43640000
    xMax = 43680000
    xD = 5000

    yMin = -79420000
    yMax = -79320000
    yD = 5000

    gridSize = [round((xMax-xMin)/xD), round((yMax-yMin)/yD)]
    grid = []
    for i in range(gridSize[1]):
        row = []
        for j in range(gridSize[0]):
            row.append(-1)
        grid.append(row)

    numH = 5

    hospitals = []
    locations = []
    capacity = []

    hospitalF = open('hospitals.txt', 'r')
    for i in range(numH):
        coordStr = hospitalF.readline()
        coord = coordStr.split(",")
        hospitals.append(coord[0])
        locations.append([int(float(coord[1])*10**6), int(float(coord[2])*10**6)])
        capacity.append(int(coord[3]))

    for x in range(0, gridSize[0]):
        for y in range(0, gridSize[1]):
            #print(x, y)
            closestD = -1
            closestH = -1
            
            for i in range(len(hospitals)):
                distance = dist( ((x*xD)+xMin , (y*yD)+yMin), locations[i])
                #print(distance < closestD)
                if distance < closestD or closestD == -1:
                    closestD = distance
                    closestH = hospitals[i]
                    #print(hospitals[i])

            #print(closestH)
            grid[y][x] = closestH

    
    current = []
    currentF = open('currents.txt', 'r')
    for i in range(numH):
        curStr = currentF.readline()
        current.append(int(curStr))

    gridStatus = copy.deepcopy(grid)

    #print(current)
    #print(capacity)

    for y in range(gridSize[1]):
        for x in range(gridSize[0]):
            
            for i in range(len(hospitals)):
                if grid[y][x] == hospitals[i]:
                    gridStatus[y][x] = current[i]/capacity[i]


    return grid, gridStatus, hospitals, locations, xMax, xMin, yMax, yMin

if __name__ == "__main__":
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            print(grid[i][j] + "\t", end = '')
        print()
